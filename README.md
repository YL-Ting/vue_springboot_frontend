# vue_springboot_frontend
## 參考資源
- [Springboot+Vue前后端分离多用户社区项目实战教程](https://www.bilibili.com/video/BV1Wz4y1U7vC?p=1&vd_source=6d546484cb2ed7781260c1e7d726c01f).
- [前端 Source code](https://github.com/songboriceman/doubao_community_frontend)
- [後端 Source code](https://github.com/songboriceman/doubao_community_backend)

## 問題紀錄
- Buefy dosen't work : Buefy only support Vue 2.6+ , should change project version to Vue 2.6+

    [Does Bulma Buefy support VUE 3?](https://stackoverflow.com/questions/71879603/does-bulma-buefy-support-vue-3)
- Project clone from URL "yarn serve" get error
    ```
    /bin/sh: vue-cli-service: command not found
    error Command failed with exit code 127.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    ```
    solution: rebuild the project.(because git will not record the change of "node_modules")
    ```
    yarn install
    ```