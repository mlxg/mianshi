function setParam(param, value) {
    const query = '?carName=aa&Age1=12&sat=hi'.substring(1);
    const p = new RegExp('(^|&)' + param + '=([^&]*)(&|$)');

    if (p.test(query)) {//判断参数是否存在
        const firstParam = query.split(param)[0];//用参数去拆
        const secondParam = query.split(param)[1];

        if (secondParam.indexOf('&') > 0) {//
            const lastParam = secondParam.substring(secondParam.indexOf('&') + 1);
            return '?' + firstParam + param + '=' + value + '&' + lastParam;
        } else {
            return '?' + firstParam + param + '=' + value;
        }
    } else {
        if (query) {
            return '?' + query + '&' + param + '=' + value;
        } else {
            return '?' + param + '=' + value;
        }
    }
}

console.log(setParam('Age', '1'));