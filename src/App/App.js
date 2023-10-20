import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><br/>Mark Belford Website Style Guide</h1>
      </header>
      <section className='content sectionColor'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='underline'>Colors</h2><br/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2'>
            <div className='colorBlock color1'>
              <p className='colorText'>#fd1d86</p>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='colorBlock color2'>
              <p className='colorText dark'>#f4f2ed</p>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='colorBlock color3'>
              <p className='colorText'>#ada59b</p>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='colorBlock color4'>
              <p className='colorText'>#7c7670</p>
            </div>
          </div>
        </div>
      </section>
      <section className='content'>
        <div className='row'>
          <div className='col-md-12'>
          <h2 className='underline'>Typography</h2><br/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 bodoni'>
            <h3>Bodoni pt variable</h3>
            <p className='bodoni-weight-1'>REGULAR - The quick brown fox jumped over the lazy dog</p>
            <p className='bodoni-weight-2'>MEDIUM - The quick brown fox jumped over the lazy dog</p>
            <p className='bodoni-weight-3'>DEMI - The quick brown fox jumped over the lazy dog</p>
            <p className='bodoni-weight-4'>BOLD - The quick brown fox jumped over the lazy dog</p>
            <p className='bodoni-weight-5'>EXTRA BOLD - The quick brown fox jumped over the lazy dog</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 gotham'>
            <h3><br/>Gotham</h3>
            <p className='gotham-weight-2'>LIGHT - The quick brown fox jumped over the lazy dog</p>
            <p className='gotham-weight-3'>BOOK - The quick brown fox jumped over the lazy dog</p>
            <p className='gotham-weight-4'>MEDIUM - The quick brown fox jumped over the lazy dog</p>
            <p className='gotham-weight-5'>BOLD - The quick brown fox jumped over the lazy dog</p>
            <p className='gotham-weight-6'>BLACK - The quick brown fox jumped over the lazy dog</p>
          </div>
        </div>
      </section>
      <section className='content'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='underline'>Text Styles</h2><br/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <h1>h1: Main Page Headings</h1>
            <p>
              Font-family: bodoni-pt-variable<br/>
              Font-size: 76px<br/>
              Line-height: 64px<br/>
              Font-weight: 700 (bold)<br/>
            </p>
          </div>
          <div className='col-md-12'>
            <h2><br/>h2: Sub-Headings</h2>
            <p>
              Font-family: bodoni-pt-variable<br/>
              Font-size: 55px<br/>
              Line-height: 59px<br/>
              Font-weight: 700 (bold)<br/>
            </p>
          </div>
          <div className='col-md-12'>
            <h3><br/>h3: Sub-Headings</h3>
            <p>
              Font-family: bodoni-pt-variable<br/>
              Font-size: 48px<br/>
              Line-height: 54px<br/>
              Font-weight: 700 (bold)<br/>
            </p>
          </div>
          <div className='col-md-12'>
            <p><br/>p: Paragraph Text</p>
            <p>
              Font-family: Gotham<br/>
              Font-size: 16px<br/>
              Line-height: 24px<br/>
              Font-weight: book<br/>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
