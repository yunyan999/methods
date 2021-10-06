/**
 * @author maoyungui
 * @description 常见的校验方法
 */

/**
 * 匹配带精度的数字
 * 用法：validator:(...args)=>{isValidatorNumber( ...args)}  2位小数
 * 用法：validator:(...args)=>{isValidatorNumber( ...args,1)} 一位小数
 * 用法：validator:(...args)=>{isValidatorNumber( ...args,1,8)} 一位小数，且整数位最多为8
 */
export const isValidatorNumber = (rule,value ,callback,percison=2,intNumberLength) => {
    var reg = new RegExp(`^\\d*(\\\.\\d{1,${percison}})?$`)
    var message = `最多只能输入${percison}位小数` 
    if(!percison){
        reg = new RegExp(`^\\d*$`)
        message = `请输入整数` 
    }else if(percison && intNumberLength){
        reg = new RegExp(`^\\d{1,${intNumberLength}}(\\\.\\d{1,${percison}})?$`)
        message = `整数部分最大长度为${intNumberLength},且最多只能输入${percison}位小数` 
    }else if(!percison && intNumberLength){
        reg = new RegExp(`^\\d{1,${intNumberLength}}$`)
        message = `整数最大长度为${intNumberLength}` 
    }
    if(reg.test(value)){
        callback();
    }
    callback(message);
}
/**
 * 匹配字母和数字的组合
 * 用法：validator:(...args)=>{isValidatorCode(...args)} 只能由数字和字母组成
 * 用法：validator:(...args)=>{isValidatorCode( ...args,10)}  只能由数字和字母组成，且长度最多为10
 * 用法：validator:(...args)=>{isValidatorCode( ...args,10,20)}   只能由数字和字母组成，且长度范围为10~20
 */

export const isValidatorCode = (rule,value ,callback,min,max) =>{
    var reg = '';
    var message = '';
    if(!min && !max){
        reg = new RegExp(`^[0-9A-Za-z]*$`)
        message = '只能输入字母或数字'
    }else if((min && !max) || (!min && max)){
        var length = min || max;
        reg = new RegExp(`^[0-9A-Za-z]{1,${length}}$`)
        message = `只能输入字母或数字,且最大长度为${length}`
    }else if(min && max){
        reg = new RegExp(`^[0-9A-Za-z]{${min},${max}}$`)
        message = `只能输入字母或数字,且长度范围为${min}~${max}`
    }
    if(reg.test(value)){
        callback();
    }
    callback(message);
}