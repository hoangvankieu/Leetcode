
var jump = function(nums) {
  var step=nums[0],temp_step=step;
  var sum_step=0,max_step=0,vt_max=0;
  if(nums.length<2 || nums[0]==0){
    return 0;
  }
  for(let i=1;i<nums.length;++i){ 
    if(step+i>nums.length-1){
      sum_step++;
      
      break;
    }
    if(--step==0){
      sum_step++;
    }
    
    if(temp_step+nums[i]-step>=max_step){
      max_step=temp_step+nums[i]-step;
      vt_max=i;
      
    }
    
    if(step==0){
      console.log(vt_max);
      step=nums[vt_max]-(i-vt_max);
      if(step==0){
        step=nums[i];
      }
      temp_step=step;
      max_step=0;
      
    }
    
  } 
  return sum_step;
}
var nums = [3,2,1];
alert("hello"+jump(nums));