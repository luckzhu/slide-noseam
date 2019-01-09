var allImages = $('.images > img')
initialize()

let index = 0

var timeID = setInterval(() => {

    let size = allImages.length;
    index = index % size;
    index2 = index + 1
    if(index2 === 4){
        index2 = 0
    }

  enterLeaveStatus(allImages.eq(index))
    .one('transitionend',function(x){
    enterWaitStatus($(x.currentTarget))  
  })
  enterDisplayStatus(allImages.eq(index2))
  
  console.log([index,index2])
 
  
 
  index += 1
  
},2000)


function initialize(){
  n=1
  allImages.eq(0).addClass('display')
    .siblings().addClass('wait')
}

function enterDisplayStatus($node){
  return $node.removeClass('leave wait').addClass('display')
}

function enterLeaveStatus($node){
  return $node.removeClass('display wait').addClass('leave')
}

function enterWaitStatus($node){
  return $node.removeClass('display leave').addClass('wait')
}