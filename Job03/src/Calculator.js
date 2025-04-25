function evaluateExpression(expression) {
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error("Expression invalide");
    }
    return eval(expression);
  }
  
  if (typeof module !== 'undefined') {
    module.exports = {
      calculate: evaluateExpression
    };
  }
  