use std::path::PathBuf;
use ::rspc::Router;
use derive_new::new;
use rspc::Config;

#[derive(new)]
pub struct RPCContext {
    pub name: String,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let router = Router::<RPCContext>::new()
        .config(Config::new().export_ts_bindings(
            PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../src/bindings.ts"),
        ))
        .query("version", |t| t(|_, _: ()| env!("CARGO_PKG_VERSION")))
        .query("echo", |t| t(|_, s: String| s))
        .build()
        .arced();

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(rspc_tauri2::plugin(router, |app_handle| {
            let config = app_handle.config();
            let name = config.identifier.clone();

            RPCContext::new(name)
        }))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
