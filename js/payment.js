/**
 * payment.js — Payment section behavior
 * - Payment method selection
 * - Card number / expiry live formatting & preview
 * - Payment processing (simulation)
 */

'use strict';

const Payment = (() => {

  // ── DOM references ─────────────────────────────────────────
  const methodBtns    = qsa('.pay-method');
  const cardNumInput  = qs('#cardNum');
  const cardNameInput = qs('#cardName');
  const cardExpInput  = qs('#cardExp');
  const cardCvvInput  = qs('#cardCvv');

  const numPreview    = qs('#cardNumPreview');
  const namePreview   = qs('#cardNamePreview');
  const expPreview    = qs('#cardExpPreview');

  const payBtn        = qs('#payBtn');
  const paySection    = qs('#pago');

  // ── Payment method toggle ──────────────────────────────────

  const initMethodToggle = () => {
    methodBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        methodBtns.forEach((b) => {
          b.classList.remove('pay-method--selected');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('pay-method--selected');
        btn.setAttribute('aria-pressed', 'true');
      });
    });
  };

  // ── Card number formatting & preview ──────────────────────

  const initCardInputs = () => {
    cardNumInput?.addEventListener('input', (e) => {
      const formatted = formatCardNumber(e.target.value);
      e.target.value = formatted;
      if (numPreview) {
        numPreview.textContent = formatted || '•••• •••• •••• ••••';
      }
    });

    cardNameInput?.addEventListener('input', (e) => {
      if (namePreview) {
        namePreview.textContent = e.target.value.toUpperCase() || 'NOMBRE APELLIDO';
      }
    });

    cardExpInput?.addEventListener('input', (e) => {
      const formatted = formatExpiry(e.target.value);
      e.target.value = formatted;
      if (expPreview) {
        expPreview.textContent = formatted || 'MM/AA';
      }
    });

    // CVV: digits only
    cardCvvInput?.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
    });
  };

  // ── Validation ─────────────────────────────────────────────

  const validateCard = () => {
    const num  = cardNumInput?.value.replace(/\s/g, '') || '';
    const name = cardNameInput?.value.trim() || '';
    const exp  = cardExpInput?.value || '';
    const cvv  = cardCvvInput?.value || '';

    if (num.length < 16) {
      alert('Por favor ingresa un número de tarjeta válido (16 dígitos).');
      return false;
    }
    if (!name) {
      alert('Por favor ingresa el nombre que aparece en la tarjeta.');
      return false;
    }
    if (exp.length < 5) {
      alert('Por favor ingresa la fecha de vencimiento (MM/AA).');
      return false;
    }
    if (cvv.length < 3) {
      alert('Por favor ingresa el código CVV de la tarjeta.');
      return false;
    }
    return true;
  };

  // ── Payment processing ─────────────────────────────────────

  const processPayment = () => {
    if (!validateCard()) return;

    // Show loading state
    if (payBtn) {
      payBtn.textContent = 'Procesando…';
      payBtn.disabled = true;
    }

    // Simulate async payment processing (replace with real gateway call)
    setTimeout(() => {
      if (payBtn) {
        payBtn.textContent = 'Pagar RD$ 45,000 →';
        payBtn.disabled = false;
      }

      // Show success modal
      const modal = qs('#paySuccessOverlay');
      if (modal) showEl(modal);
    }, 2000);
  };

  // ── Close modal ────────────────────────────────────────────

  const initModalClose = () => {
    qs('#closePaySuccess')?.addEventListener('click', () => {
      hideEl(qs('#paySuccessOverlay'));
    });
  };

  // ── Reveal payment section ─────────────────────────────────

  /**
   * Show payment section — called externally after quote is accepted
   */
  const showPaymentSection = () => {
    if (!paySection) return;
    showEl(paySection);
    paySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ── Init ───────────────────────────────────────────────────

  const init = () => {
    initMethodToggle();
    initCardInputs();
    payBtn?.addEventListener('click', processPayment);
    initModalClose();
  };

  return { init, showPaymentSection };

})();
