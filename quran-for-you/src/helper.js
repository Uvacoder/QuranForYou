export const updateParams = ($router, newParams) => {
    const currentParams = $router.currentRoute.params;
    // Create new params object
    const mergedParams = Object.assign({}, currentParams, newParams);

    // When router is not supplied path or name,
    // it simply tries to update current route with new params or query
    // Almost everything is optional.
    $router.push({ params: mergedParams });
};