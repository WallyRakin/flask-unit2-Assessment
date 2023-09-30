function snakeToCamel(str) {
    let camelStrBeta = ''
    str.split("_").map(a => { return a[0].toUpperCase() + a.slice(1); }).forEach(a => { camelStr += a; });
    return str[0] + camelStrBeta.slice(1);
};