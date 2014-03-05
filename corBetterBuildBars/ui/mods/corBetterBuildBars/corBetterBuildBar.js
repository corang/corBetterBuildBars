initialSettingValue("cBBB_Trans", 0);

$('head').append( "<link id='cBBCSS' href='' rel='stylesheet' type='text/css'>" );

var CBB = decode(localStorage.settings).cBBB_Trans;
console.log("cBBB: Loaded, cBBB_Trans = " + CBB);

if (CBB === "Transparency On")
    {
    $(".div_build_bar_midspan > div").css('margin', '0px 0px 0px 0px').css('opacity', '.8');
    $("#cBBCSS").prop('href', 'corBetterBuildBar.css')
    }
else if (CBB === "Transparency Off")
    {
    $(".div_build_bar_midspan > div").css('margin', '0px 0px 0px 0px').css('opacity', '1');
    $("#cBBCSS").prop('href', 'corBetterBuildBar.css')
    }
else if (CBB === "Icons Only")
    {
    $(".div_build_bar_midspan > div").css('margin', '0px 0px 0px 0px').css('background', 'none');
    $("#cBBCSS").prop('href', 'corBetterBuildBarMini.css')
    }
else
    {
    $(".div_build_bar_midspan > div").css('margin', '0px 0px 0px 0px').css('opacity', '0.8');
    $("#cBBCSS").prop('href', 'corBetterBuildBarMiniWithBG.css')
    }