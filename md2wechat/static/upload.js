// var uploadService = 'http://localhost:5000/upload' // 上传服务地址
var uploadService = 'http://md2wechat.90byte.com/upload' // 上传服务地址
var uploadFileFormDataKeyName = 'file'


/**
 * 从服务端响应的数据里提取出图片的url
 * @param {object} resData 服务端响应数据
 */
function decodeResImageUrl(resData) {
  var rawUrl = resData.url;

  if (!rawUrl && resData.data) {
    rawUrl = resData.data.uri;
  }

  var prefix = rawUrl.indexOf('http') === 0 ? '' : 'http://md2wechat.90byte.com';

  return prefix + rawUrl;
}

function handleClipboardData(items, cm) {
  var flag = false;
  for (var i = 0, len = items.length; i < len; i++) {
    var citem = items[i];
    if (citem.type.indexOf('image') === 0) {
      flag = true;
      uploadimg(citem.getAsFile()).then(function (res) {
        renderImgMD(res, cm);
      });
    }
  }

  return flag;
}

function renderImgMD(res, cm) {
  var pos = cm.getCursor();
  var url = decodeResImageUrl(res.data);
  if (url) {
    cm.doc.replaceRange('![](' + url + ')', pos);
  } else {
    app.$message({
      message: '上传失败', type: 'error'
    });
  }
}

function uploadimg(b) {
  var f = new FormData();
  // f.append('upfile', b);
  f.append(uploadFileFormDataKeyName, b);

  return axios({
    method: 'post',
    url: uploadService,
    data: f,
    withCredentials: false
  })
} 


// 图片上传
CodeMirror.defineInitHook(function (cm) {
  cm.display.wrapper.addEventListener('paste', function (e) {

    var clipboardData = (e.clipboardData || e.originalEvent.clipboardData);

    if (clipboardData.items) {
      if (handleClipboardData(clipboardData.items, cm)) {
        e.preventDefault();
      }
    }
  })
})