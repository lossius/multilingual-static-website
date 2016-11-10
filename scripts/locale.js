function setLocaleOnLoad()
{
  var locale = Cookies.get('locale');
  showLocale();
}

function setLocale(locale)
{
      Cookies.set('locale', locale, { domain: 'www.example.com' });
      showLocale()
}

function showLocale()
{
      if (Cookies.get('locale') == 'en')
      {
        $(".localeEn").removeClass('hiddenLocale');
        $(".localeNo").addClass('hiddenLocale');
      }
      else
      {
        $(".localeNo").removeClass('hiddenLocale');
        $(".localeEn").addClass('hiddenLocale');
      }
}