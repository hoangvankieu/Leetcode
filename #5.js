var check = function(s) {
    for (let i = 0; i < s.length; ++i) {
      if (i >= s.length - i - 1) {
        break;
      }
      if (s[i] != s[s.length - i - 1]) {
        return false;
      }
    }
    return true;
  };
 
  var longestPalindrome = function(s) {
     var longestString = "";
    for (let i = 0; i < s.length; ++i) {
      var t_string="";
      for (let j = i; j < s.length; ++j) {
        t_string+=s[j];
        if(check(t_string)==true){
          if(t_string.length>longestString.length){
            longestString=t_string;
          }
        }
      }
    }
    return longestString;
  };