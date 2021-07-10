var res = ["share_review_picture_1612421450.jpeg","share_review_picture_1613028330.jpeg","share_review_picture_1613028645.jpeg","share_review_picture_1613030661.jpeg","share_review_picture_1613619207.jpeg","share_review_picture_1613619236.jpeg","share_review_picture_1613827719.jpeg","share_review_picture_1613828294.jpeg","share_review_picture_1613959318.jpeg","share_review_picture_1614840987.jpeg","share_review_picture_1614841026.jpeg","share_review_picture_1614923780.jpeg","share_review_picture_1614923812.jpeg","share_review_picture_1615082821.jpeg","share_review_picture_1615787488.jpeg","share_review_picture_1615864224.jpeg","share_review_picture_1615864252.jpeg","share_review_picture_1615868395.jpeg","share_review_picture_1615868415.jpeg","share_review_picture_1615953356.jpeg","share_review_picture_1615953455.jpeg","share_review_picture_1615953511.jpeg","share_review_picture_1616047030.jpeg","share_review_picture_1616125485.jpeg","share_review_picture_1616125500.jpeg","share_review_picture_1616208233.jpeg","share_review_picture_1616301111.jpeg","share_review_picture_1616311491.jpeg","share_review_picture_1616327416.jpeg","share_review_picture_1616384878.jpeg","share_review_picture_1616465781.jpeg","share_review_picture_1616465910.jpeg","share_review_picture_1616465944.jpeg","share_review_picture_1616548876.jpeg","share_review_picture_1616548915.jpeg","share_review_picture_1616684235.jpeg","share_review_picture_1616684409.jpeg","share_review_picture_1616813763.jpeg","share_review_picture_1616986047.jpeg","share_review_picture_1617077267.jpeg","share_review_picture_1617077315.jpeg","share_review_picture_1617149045.jpeg","share_review_picture_1617149159.jpeg","share_review_picture_1617149183.jpeg","share_review_picture_1617173168.jpeg","share_review_picture_1617173244.jpeg","share_review_picture_1617329757.jpeg","share_review_picture_1617329786.jpeg","share_review_picture_1617419890.jpeg","share_review_picture_1617502938.jpeg","share_review_picture_1617589506.jpeg","share_review_picture_1617620986.jpeg","share_review_picture_1617762105.jpeg","share_review_picture_1617762174.jpeg","share_review_picture_1617873553.jpeg","share_review_picture_1617873714.jpeg","share_review_picture_1617942975.jpeg","share_review_picture_1618553834.jpeg","share_review_picture_1619571710.jpeg","share_review_picture_1620088823.jpeg","share_review_picture_1620088891.jpeg","share_review_picture_1620865611.jpeg","share_review_picture_1620901379.jpeg","share_review_picture_1620901392.jpeg","share_review_picture_1621038117.jpeg","share_review_picture_1621991686.jpeg","share_review_picture_1622103607.jpeg","share_review_picture_1622192502.jpeg","share_review_picture_1622421798.jpeg","share_review_picture_1623025450.jpeg","share_review_picture_1623026485.jpeg","share_review_picture_1623122912.jpeg","share_review_picture_1623370120.jpeg","share_review_picture_1623386245.jpeg","share_review_picture_1623386304.jpeg","share_review_picture_1623731897.jpeg","share_review_picture_1623912977.jpeg","share_review_picture_1624112318.jpeg","share_review_picture_1624248899.jpeg","share_review_picture_1624248914.jpeg","share_review_picture_1624342111.jpeg","share_review_picture_1624342132.jpeg","share_review_picture_1624635902.jpeg","share_review_picture_1624807999.jpeg","share_review_picture_1625066040.jpeg","share_review_picture_1625156522.jpeg","share_review_picture_1625156598.jpeg","share_review_picture_1625156664.jpeg","share_review_picture_1625181913.jpeg","share_review_picture_1625181940.jpeg","share_review_picture_1625181969.jpeg","share_review_picture_1625182016.jpeg","share_review_picture_1625240334.jpeg","share_review_picture_1625394638.jpeg","share_review_picture_1625394667.jpeg","share_review_picture_1625554788.jpeg","share_review_picture_1625569498.jpeg"];
var index = 0;

var play = document.getElementById('play');
if(res[index]){
    play.setAttribute('src',`./res/${res[index]}`);
}
document.getElementById('prev').addEventListener('click', () => {
    if(index > 0 && res[index-1]){
        play.setAttribute('src',`./res/${res[--index]}`)
    }
});
document.getElementById('next').addEventListener('click', () => {
    if(index < res.length - 1 && res[index+1]){
        play.setAttribute('src',`./res/${res[++index]}`)
    }
});