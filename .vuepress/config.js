module.exports = {
    "title": "lz1998's blog",
    "description": "lz1998's blog",
    "dest": "output",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "noFoundPageByTencent": false,
        "subSidebar": 'auto',
        "nav": [
            {
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            // {
            //   "text": "Docs",
            //   "icon": "reco-message",
            //   "items": [
            //     {
            //       "text": "vuepress-reco",
            //       "link": "/docs/theme-reco/"
            //     }
            //   ]
            // },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/lz1998",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "friendLink": [
            {
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "email": "1156743527@qq.com",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "lz1998",
        "authorAvatar": "/avatar.png",
        "record": "沪ICP备18003829号",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
    "plugins": {
        "@vuepress-reco/vuepress-plugin-kan-ban-niang":
            {
                theme: ["haru2"],
                clean: true,
                // modelStyle: {
                //     position: "fixed",
                //     left: "0px",
                //     bottom: "0px",
                //     opacity: "0.9",
                //     zIndex: 99999
                // }
            }
    }
}
