import jwtDecode from "jwt-decode";
export const updateParams = ($router, newParams) => {
    const currentParams = $router.currentRoute.params;
    if (!objectEquals(currentParams, newParams)) {
        // Create new params object
        const mergedParams = Object.assign({}, currentParams, newParams);

        // When router is not supplied path or name,
        // it simply tries to update current route with new params or query
        // Almost everything is optional.
        $router.push({ params: mergedParams });
    }
};

export const isAccesTokenExpired = (accessToken) =>
    jwtDecode(accessToken).exp < Date.now() / 1000;

export function objectEquals(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            if (!obj2.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    for (var i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            if (!obj1.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    return true;
}