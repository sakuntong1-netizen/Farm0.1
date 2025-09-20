<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>โปรแกรมคำนวณการคราฟ</title>
<style>
    body { font-family: sans-serif; max-width: 400px; margin: 20px auto; }
    input, button { width: 100%; padding: 10px; margin: 5px 0; }
    .result { background: #f1f1f1; padding: 10px; margin-top: 10px; border-radius: 5px; }
    .error { color: red; font-weight: bold; }
</style>
</head>
<body>
<h2>โปรแกรมคำนวณการคราฟ</h2>

<label>กรอกจำนวนเศษทองแดง:</label>
<input type="text" id="copper" placeholder="เช่น 200">

<label>กรอกจำนวนเศษเหล็ก:</label>
<input type="text" id="iron" placeholder="เช่น 50">

<label>กรอกจำนวนเศษทอง:</label>
<input type="text" id="gold" placeholder="เช่น 20">

<button onclick="calculate()">คำนวณ</button>

<div class="result" id="output"></div>

<script>
function calculate(){
    // อ่านค่าจากช่อง input
    let A = document.getElementById('copper').value.trim();
    let B = document.getElementById('iron').value.trim();
    let C = document.getElementById('gold').value.trim();

    // ✅ ตรวจสอบว่าเป็นตัวเลขหรือไม่ (และไม่เว้นว่าง)
    if (A === "" || isNaN(A) || B === "" || isNaN(B) || C === "" || isNaN(C)) {
        document.getElementById('output').innerHTML =
            "<span class='error'>⚠️ กรุณากรอกเป็นตัวเลขเท่านั้น และห้ามเว้นว่าง</span>";
        return; // ❌ ไม่คำนวณต่อ
    }

    // แปลงเป็นตัวเลข
    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);

    // เริ่มคำนวณ
    let Copper = Math.floor(A/2);
    let Iron   = Math.floor(B/2);
    let Gold   = Math.floor(C/2);

    let CraftCopper = Math.floor(Copper/20);
    let CraftIron   = Math.floor(Iron/10);
    let CraftGold   = Math.floor(Gold/5);

    let text = `
        จำนวนทองแดง: ${Copper} ชิ้น<br>
        จำนวนเหล็ก: ${Iron} ชิ้น<br>
        จำนวนทอง: ${Gold} ชิ้น<br><br>
        ทองแดงคราฟได้: ${CraftCopper} รอบ<br>
        เหล็กคราฟได้: ${CraftIron} รอบ<br>
        ทองคราฟได้: ${CraftGold} รอบ<br>
    `;

    if (CraftCopper > CraftIron) {
        let X = (CraftCopper - CraftIron) * 10;
        text += `<b>ต้องฟามเหล็กอีก ${X} ชิ้น หรือ ${X*2} เศษ</b>`;
    } else if (CraftIron > CraftCopper) {
        let Y = (CraftIron - CraftCopper) * 20;
        text += `<b>ต้องฟามทองแดงอีก ${Y} ชิ้น หรือ ${Y*2} เศษ</b>`;
    } else {
        text += `<b>ทองแดงและเหล็กคราฟได้เท่ากันแล้ว</b>`;
    }

    let MaxCraft = Math.min(CraftCopper, CraftIron, CraftGold);
    text += `<br><br>จำนวนคราฟสูงสุดที่ทำได้: <b>${MaxCraft}</b> รอบ`;

    // แสดงผลลัพธ์
    document.getElementById('output').innerHTML = text;
}
</script>
</body>
</html>
