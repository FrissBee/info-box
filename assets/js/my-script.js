'use strict';

(() => {
  // =========================
  // 	DOM
  const DOM = {};
  DOM.changePosition = document.querySelector('select.change-position');
  DOM.infoBox_Demo = document.querySelector('info-box.demo');
  DOM.btnDemo = document.querySelectorAll('.btn-demo');

  // =========================
  // 	INIT
  const init = () => {
    /**
     * Note:
     * The `addEventToSelect()` function is only for the demo.
     * The best way is to set the attributes in the `info-box` HTML tag.
     */
    addEventToSelect();

    /**
     * Add the method `showInfoBox()` to the `info-box` HTML tag
     * to display the info box with the desired text.
     */
    DOM.btnDemo.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const textContent = /* html */ `You have added <b>${e.currentTarget.dataset.product}</b> to the Info Box.
        <br />
        Feel free to choose something else.`;

        // The transferred text is displayed with the `showInfoBox()` function.
        DOM.infoBox_Demo.showInfoBox(textContent);
      });
    });
  };

  // =========================
  // 	FUNCTIONS
  const addEventToSelect = () => {
    DOM.changePosition.addEventListener('change', (e) => {
      const position = e.currentTarget.value;

      // clear style and position
      DOM.infoBox_Demo.removeAttribute('top-space');
      DOM.infoBox_Demo.removeAttribute('top-space');
      DOM.infoBox_Demo.removeAttribute('left-space');
      DOM.infoBox_Demo.removeAttribute('right-space');
      DOM.infoBox_Demo.removeAttribute('center-center');
      DOM.infoBox_Demo.removeAttribute('bottom-center');
      DOM.infoBox_Demo.removeAttribute('top-center');
      DOM.infoBox_Demo.removeAttribute('is-reverse');
      DOM.infoBox_Demo.removeAttribute('has-shadow');
      DOM.infoBox_Demo.removeAttribute('time-out');
      DOM.infoBox_Demo.removeAttribute('style-content');
      DOM.infoBox_Demo.removeAttribute('icon-color');
      DOM.infoBox_Demo.removeAttribute('icon-bg');
      DOM.infoBox_Demo.removeAttribute('icon-bg');
      DOM.infoBox_Demo.removeAttribute('style-icon');

      // set stye and position by select
      if (position === 'bottom-right') {
        // Set style  - default
        DOM.infoBox_Demo.setAttribute('time-out', '3000');
        DOM.infoBox_Demo.setAttribute(
          'style-content',
          'margin: 8px 0; display: flex; background-color: #cfe2ff; border: 1px solid #d1d1d1; border-radius: 4px; padding: 20px 16px 16px; max-width: 300px; font-size: 1rem; color: #212529; font-weight: 400; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; line-height: 1.5;'
        );
        DOM.infoBox_Demo.setAttribute(
          'style-icon',
          'fill: #515151; height: 1.6rem; width: 1.6rem; border-radius: .4rem; background: transparent; cursor: pointer; margin-top: -20px; margin-right: -16px;'
        );

        // Set position
        DOM.infoBox_Demo.setAttribute('right-space', '10px');
        DOM.infoBox_Demo.setAttribute('bottom-space', '10px');

        //
      } else if (position === 'bottom-center') {
        // Set style
        DOM.infoBox_Demo.setAttribute('time-out', '3000');
        DOM.infoBox_Demo.setAttribute(
          'style-content',
          'font-size: 14px; color: #000; padding: 20px; background-color: #8adb9f; max-width: 400px; margin: 1.6rem 10px 0;'
        );
        DOM.infoBox_Demo.setAttribute('style-icon', 'fill: #b31e1e; background-color: #ebebeb; margin-right: -20px;');

        // Set position
        DOM.infoBox_Demo.setAttribute('bottom-center', '50px');

        //
      } else if (position === 'bottom-left') {
        // Set style
        DOM.infoBox_Demo.setAttribute('time-out', '4000');
        DOM.infoBox_Demo.setAttribute(
          'style-content',
          'max-width: 400px; font-size: 18px; color: #f7f7f7; padding: 10px; background-color: #c46a6a; border-radius: 12px; border: 2px solid #5e5e5e;'
        );
        DOM.infoBox_Demo.setAttribute('icon-color', '#fafafa');
        DOM.infoBox_Demo.setAttribute('icon-bg', '#5e5e5e');

        // Set position
        DOM.infoBox_Demo.setAttribute('bottom-space', '10px');
        DOM.infoBox_Demo.setAttribute('left-space', '20px');

        //
      } else if (position === 'top-right') {
        // Set style
        DOM.infoBox_Demo.setAttribute('time-out', '5000');

        DOM.infoBox_Demo.setAttribute('style-content', 'font-size: 14px; color: #f7f7f7; padding: 24px; background-color: #176285');
        DOM.infoBox_Demo.setAttribute('icon-color', '#f7f7f7');
        DOM.infoBox_Demo.setAttribute('icon-bg', 'transparent');
        DOM.infoBox_Demo.setAttribute('is-reverse', '');

        // Set position
        DOM.infoBox_Demo.setAttribute('top-space', '10px');
        DOM.infoBox_Demo.setAttribute('right-space', '50px');

        //
      } else if (position === 'top-center') {
        // Set style
        DOM.infoBox_Demo.setAttribute('time-out', '6000');
        DOM.infoBox_Demo.setAttribute(
          'style-content',
          'font-size: 16px; color: #f7f7f7; padding: 20px; background-color: #176285; text-align: center; border-radius: 8px; margin: 28px 0;'
        );
        DOM.infoBox_Demo.setAttribute('style-icon', 'background: #ebebeb; fill: #b31e1e; margin-right: -50px; margin-top: -44px');
        DOM.infoBox_Demo.setAttribute('is-reverse', '');
        DOM.infoBox_Demo.setAttribute('has-shadow', '');

        // Set position
        DOM.infoBox_Demo.setAttribute('top-center', '20px');

        //
      } else if (position === 'top-left') {
        // Set style
        DOM.infoBox_Demo.setAttribute('time-out', '6500');
        DOM.infoBox_Demo.setAttribute(
          'style-content',
          'max-width: 200px; font-size: 18px; color: #f7f7f7; padding: 20px 16px 16px; background-color: #8b3fab; border-radius: 8px;'
        );
        DOM.infoBox_Demo.setAttribute('icon-color', '#14a819');
        DOM.infoBox_Demo.setAttribute('icon-bg', '#ebebeb');
        DOM.infoBox_Demo.setAttribute('is-reverse', '');

        // Set position
        DOM.infoBox_Demo.setAttribute('top-space', '20px');
        DOM.infoBox_Demo.setAttribute('left-space', '20px');

        //
      } else if (position === 'center-center') {
        // Set style
        DOM.infoBox_Demo.setAttribute('time-out', '0');
        DOM.infoBox_Demo.setAttribute(
          'style-content',
          'font-size: 18px; color: #f7f7f7; padding: 26px; background-color: #383838; text-align: center; max-width: 380px; border-radius: 8px;'
        );
        DOM.infoBox_Demo.setAttribute(
          'style-icon',
          'background-color: #ebebeb; fill: #707070; margin-top: -16px; margin-right: -16px; height: 32px; width: 32px; margin-left: 8px;'
        );
        DOM.infoBox_Demo.setAttribute('has-shadow', '');

        // Set position
        DOM.infoBox_Demo.setAttribute('center-center', '');

        //
      }
    });
  };

  init();
})();
