import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/**
 * shouldDetach 是否允许复用路由
 * store 当路由离开时会触发，存储路由
 * shouldAttach 是否允许还原路由
 * retrieve 获取存储路由
 * shouldReuseRoute 进入路由触发，是否同一路由时复用路由
 */
export class SimpleReuseStrategy implements RouteReuseStrategy {

    scrollTopStorageKey = "mcods_scrollTop_";

    public static handlers: { [key: string]: DetachedRouteHandle } = {}

    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // console.log("shouldDetach")
        // console.log(SimpleReuseStrategy.handlers) 
        var component: any = route.component;
        if (component) {
            localStorage.setItem(this.scrollTopStorageKey + component.name, document.documentElement.scrollTop.toString())
        }
        //有子路由的不复用
        if (route.routeConfig.children) {
            return false;
        }
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // console.log("store")
        // console.log(SimpleReuseStrategy.handlers)
        SimpleReuseStrategy.handlers[route.routeConfig.path] = handle
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // console.log("shouldAttach")
        // console.log(SimpleReuseStrategy.handlers)
        var component: any = route.component;
        if (component) {
            var scrollTop = localStorage.getItem(this.scrollTopStorageKey + component.name);
            if (scrollTop != null && scrollTop != "0") {
                setTimeout(function () {
                    document.documentElement.scrollTop = parseInt(scrollTop);
                }, 100)
            }
        }
        return !!route.routeConfig && !!SimpleReuseStrategy.handlers[route.routeConfig.path]
    }

    /** 从缓存中获取快照，若无则返回nul */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // console.log("retrieve")
        // console.log(SimpleReuseStrategy.handlers)
        if (!route.routeConfig) return null;
        if (route.routeConfig.loadChildren) return null;
        return SimpleReuseStrategy.handlers[route.routeConfig.path];
    }

    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // console.log("shouldReuseRoute")
        // console.log(SimpleReuseStrategy.handlers)
        return future.routeConfig === curr.routeConfig
    }
}