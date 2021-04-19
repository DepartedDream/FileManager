$(document).ready(
    function ()
    {
        loadIcon();
        createBtnEvent();
        backwardBtnEvent();
        forwardBtnEvent();
        fileNameEvent();
        copyBtnEvent();
        delBtnEvent();
        pasteBtnEvent();
        saveFileBtnEvent();
        triggerFileContent();
    }
)

function loadIcon()
{
    var fileSvg = `<svg t="1617180866300" fill="#ffffff" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1293"><path d="M929.023596 341.465543v606.697295a75.837162 75.837162 0 0 1-75.837162 75.837162H170.651977a75.837162 75.837162 0 0 1-75.837162-75.837162V76.035476a75.837162 75.837162 0 0 1 75.837162-75.837162h490.666437a39.397406 39.397406 0 0 1 31.472422 10.95847L916.88965 235.293516a38.563197 38.563197 0 0 1 10.996388 30.334865H929.023596v75.837162h-303.348648a37.918581 37.918581 0 0 1-37.918581-37.918581V76.035476H170.651977v872.127362h682.534457V341.465543h75.837162z m-265.430067-247.304985V265.628381h171.391986z" p-id="1294"></path></svg>`
    var dirSvg = `<svg t="1617180889525" fill="#ffffff" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2110"><path d="M928 192H492.8l-51.2-57.6-25.6-6.4h-320l-32 32v704l32 32h832l32-32v-640l-32-32z m-32 544V832H128V448h288l25.6-6.4 51.2-57.6H896v352zM896 320H480l-25.6 6.4-51.2 57.6H128V192h275.2l57.6 57.6 19.2 6.4H896v64z" p-id="2111"></path></svg>`
    var backwardSvg = `<svg t="1617184311488"  fill="#ffffff" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15369"><path d="M512 1024l93.12-93.12-352.384-352.384H1024V445.504H252.672l352.448-352.384L512 0 0 512z" p-id="15370"></path></svg>`;
    var copyBtnSvg = `<svg t="1617271675360" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="200" height="200"><path d="M838.4 68.266667h-512c-46.933333 0-85.333333 36.266667-85.333333 81.066666v38.4H185.6c-46.933333 0-85.333333 38.4-85.333333 85.333334v597.333333c0 46.933333 38.4 85.333333 85.333333 85.333333h512c46.933333 0 85.333333-38.4 85.333333-85.333333v-36.266667h55.466667c46.933333 0 85.333333-38.4 85.333333-85.333333v-597.333333c0-44.8-38.4-83.2-85.333333-83.2z m-98.133333 802.133333c0 23.466667-19.2 42.666667-42.666667 42.666667h-512c-23.466667 0-42.666667-19.2-42.666667-42.666667v-597.333333c0-23.466667 19.2-42.666667 42.666667-42.666667h512c23.466667 0 42.666667 19.2 42.666667 42.666667v597.333333z m140.8-119.466667c0 23.466667-19.2 42.666667-42.666667 42.666667h-55.466667V273.066667c0-46.933333-38.4-85.333333-85.333333-85.333334H283.733333V149.333333c0-21.333333 19.2-38.4 42.666667-38.4h512c23.466667 0 42.666667 19.2 42.666667 42.666667v597.333333z m-450.133334-83.2h-204.8c-12.8 0-21.333333 8.533333-21.333333 21.333334s8.533333 21.333333 21.333333 21.333333h204.8c12.8 0 21.333333-8.533333 21.333334-21.333333s-10.666667-21.333333-21.333334-21.333334z m98.133334-10.666666c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32 32-14.933333 32-32-12.8-32-32-32z m128-234.666667H224c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h433.066667c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z" p-id="2044" fill="#ffffff"></path></svg>`;
    var delBtnSvg = `<svg t="1617429534772" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5803" width="200" height="200"><path d="M512 537.002667l97.834667-97.834667 60.330666 60.330667L572.330667 597.333333l97.834666 97.834667-60.330666 60.330667L512 657.664l-97.834667 97.834667-60.330666-60.330667L451.669333 597.333333l-97.834666-97.834666 60.330666-60.330667L512 537.002667z m128-391.338667V298.666667h153.002667L640 145.664zM810.666667 384h-170.666667a85.333333 85.333333 0 0 1-85.333333-85.333333V128H213.333333v768h597.333334V384zM213.333333 42.666667h444.330667L896 281.002667V896a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V128a85.333333 85.333333 0 0 1 85.333333-85.333333z" p-id="5804" fill="#ffffff"></path></svg>`;
    var pasteBtnSvg = `<svg t="1617412567870" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2029" width="200" height="200"><path d="M704 128l-128 0 0-64c0-35.2-28.8-64-64-64l-128 0c-35.2 0-64 28.8-64 64l0 64-128 0 0 128 512 0 0-128zM512 128l-128 0 0-63.872c0.032-0.032 0.064-0.064 0.128-0.128l127.776 0c0.032 0.032 0.096 0.064 0.128 0.128l0 63.872zM832 320l0-160c0-17.6-14.4-32-32-32l-64 0 0 64 32 0 0 128-192 0-192 192 0 256-256 0 0-576 32 0 0-64-64 0c-17.6 0-32 14.4-32 32l0 640c0 17.6 14.4 32 32 32l288 0 0 192 640 0 0-704-192 0zM576 410.496l0 101.504-101.504 0 101.504-101.504zM960 960l-512 0 0-384 192 0 0-192 320 0 0 576z" p-id="2030" fill="#ffffff"></path></svg>`;
    var driveSvg = `<svg t="1617423023113" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2714" width="200" height="200"><path d="M85.333333 682.666667v-51.498667c0-10.410667 1.493333-20.736 4.48-30.634667L205.098667 216.32A64 64 0 0 1 266.410667 170.666667h448.512a64 64 0 0 1 61.312 45.653333l115.285333 384.213333c2.986667 9.898667 4.48 20.224 4.48 30.634667V789.333333a64 64 0 0 1-64 64h-682.666667A64 64 0 0 1 85.333333 789.333333V682.666667z m64-85.333334h682.666667c4.992 0 9.813333 0.554667 14.506667 1.664l-111.146667-370.432A21.333333 21.333333 0 0 0 714.922667 213.333333H266.410667a21.333333 21.333333 0 0 0-20.48 15.232L134.826667 598.997333c4.693333-1.109333 9.514667-1.664 14.506666-1.664zM128 704v85.333333a21.333333 21.333333 0 0 0 21.333333 21.333334h682.666667a21.333333 21.333333 0 0 0 21.333333-21.333334v-128a21.333333 21.333333 0 0 0-21.333333-21.333333h-682.666667a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667z m661.333333 21.333333a42.666667 42.666667 0 1 1-85.333333 0 42.666667 42.666667 0 0 1 85.333333 0z m-128 0a42.666667 42.666667 0 1 1-85.333333 0 42.666667 42.666667 0 0 1 85.333333 0z" fill="#ffffff" p-id="2715"></path></svg>`;
    var createFileBtnSvg = `<svg t="1617496201280" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="932" width="200" height="200"><path d="M896 595.2h-83.2v-448H211.2v659.2h384V896h-384c-44.8 0-83.2-38.4-83.2-83.2V147.2C128 102.4 166.4 64 211.2 64h595.2c51.2 0 89.6 38.4 89.6 83.2v448zM1024 812.8h-128v-128h-83.2v128h-128V896h128v128H896v-128h128" p-id="933" fill="#ffffff"></path><path d="M678.4 345.6H345.6c-25.6 0-44.8-19.2-44.8-44.8 0-25.6 19.2-44.8 44.8-44.8h332.8c25.6 0 44.8 19.2 44.8 44.8 0 25.6-19.2 44.8-44.8 44.8zM678.4 556.8H345.6c-25.6 0-44.8-19.2-44.8-44.8 0-25.6 19.2-44.8 44.8-44.8h332.8c25.6 0 44.8 19.2 44.8 44.8 0 25.6-19.2 44.8-44.8 44.8z" p-id="934" fill="#ffffff"></path></svg>`;
    var createDirBtnSvg = `<svg t="1617495831256" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="743" width="200" height="200"><path d="M140.8 448h396.8a38.4 38.4 0 1 1 0 76.8H140.8V768a51.2 51.2 0 0 0 51.2 51.2h319.808c22.272 5.312 33.408 17.984 33.408 37.952 0 19.968-11.136 32.896-33.408 38.848H192.064a128 128 0 0 1-128-128V488.192a39.04 39.04 0 0 1 0-3.584V384 256a128 128 0 0 1 128-128H383.36c49.024 0 68.096 13.248 111.104 55.936L560.64 256H832a128 128 0 0 1 128 128v66.112c-2.496 24.896-15.232 37.312-38.272 37.312s-35.84-12.416-38.464-37.312V384a51.2 51.2 0 0 0-51.2-51.2H526.912l-22.784-24.832-63.808-69.504c-33.28-33.088-34.432-33.664-57.024-33.664H192a51.2 51.2 0 0 0-51.2 51.2v192z m589.376 215.36V550.4a38.4 38.4 0 1 1 76.8 0v112.96h114.688a38.4 38.4 0 1 1 0 76.8h-114.688V857.6a38.4 38.4 0 0 1-76.8 0v-117.44H614.464a38.4 38.4 0 1 1 0-76.8h115.712z" p-id="744" fill="#ffffff"></path></svg>`;
    var forwardBtnSvg =`<svg t="1617536154619" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6197" width="200" height="200"><path d="M512 0L422.4 89.6 780.8 448H0v128h780.8l-358.4 358.4L512 1024l512-512z" fill="#ffffff" p-id="6198"></path></svg>`
    var fileArray = $(".file");
    var saveFileBtnSvg = `<svg t="1617590899832" width="30px" height="30px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1811" width="200" height="200"><path d="M994.183028 265.797005l-245.351081-255.574043s-8.519135-8.519135-16.186356-8.519135h-670.455907c-24.705491 0-40.891847 17.03827-40.891847 42.595674v937.104825c0 25.557404 16.186356 42.595674 40.891847 42.595674h899.620632c24.705491 0 40.891847-17.03827 40.891847-42.595674v-698.569051c-0.851913-8.519135-8.519135-8.519135-8.519135-17.03827z m-646.602329-178.90183h327.134775v170.382695H571.633943v-73.264559c0-16.186356-12.778702-28.965058-28.965058-28.965058h-69.856905c-16.186356 0-28.965058 12.778702-28.965058 28.965058v73.264559h-96.266223v-170.382695z m327.134775 851.913477h-327.134775v-255.574043h327.134775v255.574043z m245.351082 0h-163.567388v-298.169717c0-25.557404-16.186356-42.595674-40.891847-42.595674h-408.918469c-24.705491 0-40.891847 17.03827-40.891847 42.595674v298.169717h-163.567388v-851.913477h163.567388v212.978369c0 25.557404 16.186356 42.595674 40.891847 42.595674h408.918469c24.705491 0 40.891847-17.03827 40.891847-42.595674v-153.344426l163.567388 170.382696v621.896838z" fill="#ffffff" p-id="1812"></path></svg>`;
    for (var i = 0; i < fileArray.length; i++)
    {
        if ($($(fileArray)[i]).attr("file_type") == "file")
        {
            $($(fileArray)[i]).html(fileSvg + $((fileArray)[i]).html());
        }
        else if ($($(fileArray)[i]).attr("file_type") == "directory")
        {
            $($(fileArray)[i]).html(dirSvg + $((fileArray)[i]).html());
        }
        else if ($($(fileArray)[i]).attr("file_type") == "drive")
        {
            $($(fileArray)[i]).html(driveSvg + $((fileArray)[i]).html());
        }
    }
    var copyFileType = $("#copy_file").attr("copy_file_type");
    if (copyFileType == "file")
    {
        $("#copy_file").html(fileSvg + $("#copy_file").html());
    }
    else if (copyFileType =="directory")
    {
        $("#copy_file").html(dirSvg + $("#copy_file").html());
    }
    $("#backward_btn").html(backwardSvg)
    $(".copy_btn").html(copyBtnSvg);
    $(".del_btn").html(delBtnSvg);
    $(".paste_btn").html(pasteBtnSvg);
    $("#create_file_btn").html(createFileBtnSvg);
    $("#create_dir_btn").html(createDirBtnSvg);
    $("#forward_btn").html(forwardBtnSvg);
    $("#save_file_btn").html(saveFileBtnSvg);
}

function createBtnEvent()
{
    $("#create_file_btn").on("click", function ()
    {
        var filePath = $("#create_path_textbox").text();
        var fileType = "file";
        window.location.replace(`CreateFileHandler.ashx?file_type=${fileType}&file_path=${filePath}`)
    })
    $("#create_dir_btn").on("click", function ()
    {
        var filePath = $("#create_path_textbox").text();
        var fileType = "directory";
        window.location.replace(`CreateFileHandler.ashx?file_type=${fileType}&file_path=${filePath}`)
    })
}

function backwardBtnEvent()
{
    $("#backward_btn").on("click", function ()
    {
        window.location.replace(`BackFileHandler.ashx`)
    })
}

function forwardBtnEvent()
{
    $("#forward_btn").on("click", function ()
    {
        var filePath = $("#jump_path_textbox").text();
        window.location.replace(`OpenFileHandler.ashx?file_path=${filePath}`)
    })
}

function fileNameEvent()
{
    $(".file_name").on("click", function ()
    {
        var fileType = $(this).parent(".file").attr("file_type");
        var filePath = $(this).parent(".file").attr("file_path");
        $("#path_textbox").text(filePath);
        window.location.replace(`OpenFileHandler.ashx?file_type=${fileType}&file_path=${filePath}`)
    })
}

function copyBtnEvent()
{
    $(".copy_btn").on("click", function ()
    {
        var copyFileType = $(this).parent(".file").attr("file_type");
        var copyFilePath = $(this).parent(".file").attr("file_path");
        var copyFileName = $(this).parent(".file").children(".file_name").text();
        window.location.replace(`CopyFileHandler.ashx?&copy_file_type=${copyFileType}&copy_file_path=${copyFilePath}&copy_file_name=${copyFileName}`)
    })
}

function delBtnEvent()
{
    $(".del_btn").on("click", function ()
    {
        var fileType = $(this).parent(".file").attr("file_type");
        var filepath = $(this).parent(".file").attr("file_path");
        window.location.replace(`DeleteFileHandler.ashx?file_type=${fileType}&file_path=${filepath}`)
    })
}

function pasteBtnEvent()
{
    $(".paste_btn").on("click", function ()
    {
        window.location.replace("PasteFileHandler.ashx");
    })
}

function saveFileBtnEvent()
{
    $("#save_file_btn").on("click", function ()
    {
        var fileContent=$("#file_content").text();
        window.location.replace(`WriteFileHandler.ashx?file_content=${fileContent}`);
    })
}

function triggerFileContent()
{
    if ($("#current_path").attr("current_file_type") == "drive")
    {
        $("#file_content_contain").hide();
    }
    else if (($("#current_path").attr("current_file_type") == "directory"))
    {
        $("#file_content_contain").hide();
    }
    else if ($("#current_path").attr("current_file_type") == "file")
    {
        $("#file_content_contain").show();
    }
}