// Simple counter button functionality
(function(){
  // Create or find display element
  function ensureDisplay(){
    var display = document.getElementById('counterDisplay');
    if(!display){
      display = document.createElement('span');
      display.id = 'counterDisplay';
      display.style.marginRight = '8px';
    }
    return display;
  }

  // Create or find button element
  function ensureButton(){
    var btn = document.getElementById('counterBtn');
    if(!btn){
      btn = document.createElement('button');
      btn.id = 'counterBtn';
      btn.type = 'button';
      btn.textContent = 'Increment';
    }
    return btn;
  }

  // Initialize counter from localStorage or zero
  var count = parseInt(localStorage.getItem('business_counter')||'0',10) || 0;

  function render(container){
    var display = ensureDisplay();
    var btn = ensureButton();
    display.textContent = count;
    // attach click
    btn.addEventListener('click', function(){
      count += 1;
      display.textContent = count;
      localStorage.setItem('business_counter', String(count));
    });

    // append to container if not already in DOM
    if(!document.getElementById('counterWrapper')){
      var wrapper = document.createElement('div');
      wrapper.id = 'counterWrapper';
      wrapper.style.display = 'inline-flex';
      wrapper.style.alignItems = 'center';
      wrapper.appendChild(display);
      wrapper.appendChild(btn);
      (container || document.body).appendChild(wrapper);
    }
  }

  // Auto-run when DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ render(); });
  } else { render(); }

})();
