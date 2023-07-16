var maxSubArray = function(nums) {
    var sum=nums[0],max=nums[0];
    for(let i=1;i<nums.length;++i){
         if(sum<0){
            sum=0;
        }
        sum+=nums[i];
        max=Math.max(sum,max);
    }
    return max;
};