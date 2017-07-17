jQuery.fn.extend({
				resolveNGetMathExp: function(givenValue) {
					var returnValue = givenValue;
					
					if(givenValue === "x") {
						returnValue = "*";
					} else if(givenValue === "÷") {
						returnValue = "/";
					} else if(givenValue === "√ ") {
						returnValue = "sqrt(";
						sqrootOpr = true;
						$("#output_id").val(returnValue);
					}
					
					return returnValue;
				}
			});
		  jQuery.fn.extend({
			  clearScreen: function() {
				  	$("#cal_ans").val("");
					$("#output_id").val("");
					operationStr = "";
					newOperation = true;
					$("#error_div_id").text("");
			  } 
		  });
		  
		  jQuery.fn.extend({
			  isInvalidInput: function(passedValue) {
				  var returnValue = false;
				  
				  //First operand can not be +, -, x, division
				  if(newOperation) {
					  if(passedValue === "x" || passedValue === "+" || passedValue === "-" || passedValue === "÷")
						  returnValue = true;
				  }
				  return returnValue;
			  }
		  });