/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var check_Exist=[];
    var max=0,count=0,point_start=0;
    for(let i=0;i<s.length;++i){
        if(check_Exist[s[i]]==null){ 
            ++count;
            
        }
        else{
            if(check_Exist[s[i]]>=point_start){
                count=i-check_Exist[s[i]];
                point_start=check_Exist[s[i]];
            }
            else{
                count++;
            }
          
        }
        check_Exist[s[i]]=i;
        max=Math.max(count,max);
    }
    return max;
};
s = "bbbbb";
console.log(lengthOfLongestSubstring(s));