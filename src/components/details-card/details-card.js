const copyLinks = document.querySelectorAll('.copy-link');
const address = window.location.href;


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



const url_telegram = 'https://t.me/share/url?url=';
const url_viber = 'viber://forward?text=';
const url_vk = 'https://vk.com/share.php?url=';
const url_ok = 'https://connect.ok.ru/offer?url=';


const socialList = document.querySelector('.social__list');
if (socialList) {

  const link_telegram = socialList.querySelector('.social__link--telegram');
  const link_viber = socialList.querySelector('.social__link--viber');
  const link_vk = socialList.querySelector('.social__link--vk');
  const link_ok = socialList.querySelector('.social__link--ok');

  link_telegram.href = `${url_telegram + address}`;
  link_viber.href = `${url_viber + address}`;
  link_vk.href = `${url_vk + address}`;
  link_ok.href = `${url_ok + address}`;

}

