/* MealTimes — Essential Acids */
document.addEventListener('DOMContentLoaded', function () {

  // Экран 5: после раскрытия профиля — прокрутка к нему
  var profile = document.getElementById('aminoProfile');
  if (profile) {
    profile.addEventListener('shown.bs.collapse', function () {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      profile.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  }

  // Год в футере
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});