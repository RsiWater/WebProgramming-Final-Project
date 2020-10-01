function changeText(event){
    let i=0;
    for(const choice of choiceButtom){
        if(choice===event.currentTarget){
            const textContainer=document.querySelector('#textforA');
            textContainer.style.animation='textin 1s';
            textContainer.style.animation='none';
            if(i===0){
                setTimeout(()=>{
                textContainer.innerHTML='';
                textContainer.textContent='本作概念起源於一種日本的鄉下兒童早年流行的娛樂方式——昆蟲收集與交換不同物種，當創始人田尻智小的時候，他就很喜歡這類消遣，日後日本工業發展並經歷了都市化，他成年進入城市工作後，希望能讓都市的孩子也感受到這種樂趣，便動手開發了精靈寶可夢這部作品，遊戲允許玩家捕獲，收集，培育數百隻生物，也就是通常所說的寶可夢，而這些怪獸則是在GAME FREAK的早期小遊戲中所構思的。藉由與其他寶可夢對戰，寶可夢能夠提升等級甚至進化，成為更強大的寶可夢，習得新的絕招。在戰鬥中寶可夢幾乎不會流血或死亡，只是會暈倒（動畫中稱為「失去戰鬥能力」）。這對田尻智來說是一個敏感話題，因為他不想讓這個遊戲世界充滿更多「毫無意義的暴力」。任天堂為了讓這系列走出日本，在1998年將精靈寶可夢連同動畫引入了美國市場，自此開啟了海外門戶。';
                textContainer.style.animation='';    
                },0)
            }
            else if(i===1){
                setTimeout(()=>{
                textContainer.innerHTML='';
                textContainer.textContent='最初時精靈寶可夢本身的宗教味並不濃厚，不過在當時，隱藏的151號寶可夢「夢幻」成了蔚為一時的遊戲傳說，也增添了一點神話的味道。此外以夢幻為藍本，由人類所製造出來的寶可夢「超夢」，亦成為當時的話題。而到了第二代，則增添了一點東方神話的色彩，而在城鎮建築上也加入了東方風格、不多的園林藝術。第三代是以海陸空作為主題，以超古代時期的爭霸為背景，連結到現代形成的劇情。城鎮方面是歷代目前最有結合大自然味道的感覺。到了第四代，宗教味開始突出的一代，故事主題圍繞著時空的誕生及創世的起源，也因為這樣，讓整個世界觀變成偏向神導演化論。第六代中的世界觀轉換為對科技與生物學的崇拜，X.Y版的封面寶可夢哲爾尼亞斯與伊裴爾塔爾分別象徵生命與死亡，與之對立的傳說寶可夢基格爾德則象徵生態秩序。同時，任天堂曾在視頻發布會Nintendo Direct中表示XYZ代表座標軸的三個方向。';
                textContainer.style.animation='';    
                },0)
            }
            else{
                setTimeout(()=>{
                textContainer.innerHTML='';
                textContainer.textContent='《精靈寶可夢》（英文：Pokémon或Pocket Monsters）動畫，改編自遊戲精靈寶可夢系列，由日本的東京電視台播放，1997年4月1日開播迄今，成為東京電視台最長壽節目。故事內容主要在描述少年小智為了成為寶可夢大師，從大木博士那得到皮卡丘 ，並出發做修行之旅。途中結識不同的人、遇上不同的寶可夢。一路上有許多人和小智結伴同行，也有企圖奪走別人寶可夢的火箭隊兩人與一貓組（武藏、小次郎、喵喵）會不時出現搗亂。在這趟旅途中，小智等人和不同的人邂逅，更延伸出許多人類和寶可夢之間有趣、感人、熱血的故事。';
                textContainer.style.animation='';    
                },0)
            }
        }
        i++;
    }
}
function changeF(){
    const img=document.querySelector('#role img');
    if(changeIndex===0){
        changeIndex=1;
        img.src='image/伊布.png';
    }
    else if(changeIndex===1){
        changeIndex=0;
        img.src='image/皮卡丘.png';
    }
}

const choiceButtom=document.querySelectorAll('.textChoice');
const choices=[];
for(const choice of choiceButtom){
    choice.addEventListener('click',changeText);
    choices.push(choice);
}
let changeIndex=0;
const change=document.querySelector('#finP');
change.addEventListener('click',changeF);
