//原始資料
const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}
const phrase = ['很簡單', '很容易', '很快', '很正常']
//新增data資料
const professionChineseName = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
}
const lastKeyOfTask = 'entrepreneur' //資料有變要更動為task最後一個key

//function
function arrayNumber(array) {
    return Math.floor(Math.random() * array.length)
}

function generateTrashTalk(identity) {
    for (let key in task) {
        if (key === identity) {
            //dot notation寫起來比較簡潔，但如果想要使用變數來存取物件，只能使用 bracket notation。
            //https://pjchender.blogspot.com/2016/01/javascriptobject.html
            return "身為一個" + professionChineseName[key] + task[key][arrayNumber(task[key])] + phrase[arrayNumber(phrase)]
        } else if (key === lastKeyOfTask && key !== identity) {
            return "請選擇一個想說的人~"
        }
    }
}

module.exports = generateTrashTalk
