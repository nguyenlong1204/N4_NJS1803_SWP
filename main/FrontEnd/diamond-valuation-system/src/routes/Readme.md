# Đưa các routes trong web
# EXAMPLE 
const publicRoutes = [
    {
        path:RoutesConfig.home,
        component: Home
    },
    {
        path:RoutesConfig.following,
        component: Following
    },
    {
        path:RoutesConfig.nickname,
        component: Profile
    },
    {
        path:RoutesConfig.search,
        component: Search,
    },
    {
        path:RoutesConfig.upload,
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: RoutesConfig.live,
        component: Live
    },
]
