const ChooseLanguage = ({ language, setLanguage }) => (
  <div className="choose-language">
    <h1>Wählen Sie Ihre Sprache</h1>
    {!['de', ''].includes(language) ? (
      <h3 className="only-german">In Deutschlant spricht man Deutsch</h3>
    ) : null}
    <button onClick={() => setLanguage('de')}>Deutsch</button>
    <button onClick={() => setLanguage('en')}>English</button>
    <button onClick={() => setLanguage('sp')}>español</button>
    <button onClick={() => setLanguage('ar')}>العربية</button>
    <button onClick={() => setLanguage('ru')}>россия</button>
    <button onClick={() => setLanguage('uk')}>Українська</button>
    <button onClick={() => setLanguage('bg')}>Български</button>
    <button onClick={() => setLanguage('pl')}>polski</button>
    <button onClick={() => setLanguage('it')}>italiano</button>
    <button onClick={() => setLanguage('ja')}>日本語</button>
    <button onClick={() => setLanguage('tr')}>Türkçe</button>
    <button onClick={() => setLanguage('fr')}>Français</button>
  </div>
);

export default ChooseLanguage;
