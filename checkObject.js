/**
 * Check out deep object
 * @author Cihat ŞENGÜN - github.com/chtnsngn
 * @param {Object} obj
 * @param {String} path
 * @return {Boolean} status
 * @example
 *
 * let obj = { a: 1, b: { c: {}, d: "", e: "foo" }};
 * cObj(obj, "a.b.c"); // => true
 * cObj(obj, "a.b.d"); // => false
 * cObj(obj, "a.b.e"); // => true
 */
function cObj(obj, path) {
	status = true;
	for(let i = 0, arr = path.split("."), len = arr.length; i < len; i++) {
		if(!obj[arr[i]]) {
			status = false;
			break;
        }
		obj = obj[arr[i]];
    }
	return status;
}
