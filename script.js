var typed = new Typed('#element', {
  strings: ['Web developer', 'Core Java developer'],
  typeSpeed: 50,
});

document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector('.leftSection .btn');
  downloadButton.addEventListener('click', function () {
    const resumeUrl = 'https://drive.google.com/file/d/1d19QtShgQGJ6VoxxOXzvLdG1OLosfoNO/view?usp=drive_link';
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Abhishek_Sharma_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const githubButton = document.querySelector('.leftSection .btn2');

  githubButton.addEventListener('click', function () {
    const githubProfileUrl = 'https://github.com/Abhishek93402';
    window.location.href = githubProfileUrl;
  });
});

