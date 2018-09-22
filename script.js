var palette = [];
const numColors = 5
const gap_hue = 360 / numColors;

function randomPalette(){
    const saturation = 0.5;
    const lightness = 0.5;
    posIni = Math.floor(Math.random() * 360);
    palette = [];
    for(let i = 0; i < 5; i++) {
        var rgb = hslToRgb(posIni / 360, saturation, lightness);
        palette.push(rgbToStringColor(rgb[0], rgb[1], rgb[2]));
        posIni = (posIni + gap_hue) % 360;
    }
    showColors();
    generateRules();
}

function generateRules(){
    var  rules = [];
    rules.push(".website-background{ color: " + palette[0] + ";}");
    rules.push(".element-text{ color: " + palette[1] + ";}");
    rules.push(".element-border{ border-color:" + palette[2] + ";}");
    rules.push(".element-background{ background-color: " + palette[3] + ";}");
    rules.push(".header{ color: " + palette[4] + ";}");
    $("#css-rules").val(rules.join("\n\n"));
}

function showColors()
{
    for(let i = 1; i <= 5; i++) {
        $("#color" + i).attr("style", "background-color: " + palette[i-1] + ";");
    }
}

function cleanColors(){
    palette = [];
    for (let index = 1; index <= 5; index++) {
        $("#color"+ index).removeAttr("style");
        palette.push("#FFFFFF");
    }
    generateRules();    
 }