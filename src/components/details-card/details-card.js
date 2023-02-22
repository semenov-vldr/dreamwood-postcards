const copyLinks = document.querySelectorAll('.copy-link');
const address = document.location.href;


function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function addAlertCopyText (copyButton) {
  const span = document.createElement('span');
  span.classList.add('copy-link-alert');
  span.textContent = "Ссылка скопирована";
  copyButton.appendChild(span);
  setTimeout(() => span.remove(),1000);
};

if (copyLinks) {
  copyLinks.forEach(copyLink => {
    copyLink.addEventListener('click', () => {
      copyToClipboard(address);
      addAlertCopyText(copyLink);
    })
  });
}



