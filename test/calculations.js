export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

export function generateNumberText(a) {
  switch (a) {
    case 1:
      return "one";
      break
    case 2:
      return "two";
      break
    case 3:
      return "three";
      break;
    default:
        return "unknown";
  }
}

// when testing this remember to do boundary value analysis
  export function calculateGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  export function findAverage(numbers) {
     let sum = 0;
    if (numbers.length === 0 || numbers[0].length === 0) {
      return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers[i].length; j++) {
        sum += numbers[i][j];
      }
    }

    const average = sum / (numbers.length * numbers[0].length);
    return average;
  }
  
  
  export function squareDigits(num){

    let squareDigitsArray = [];

    for (let i = 0; i < num.length; i++){  
        squareDigitsArray.push(num[i] * num[i]);   
    }

    let resultsAsString = squareDigitsArray.join('');
    return Number(resultsAsString); 
}

export const getUserInfo = (user) => {
    return {
      name: user.firstName + " " + user.lastName,
      email: user.email,
      address: user.address,
    };
  };


export function removeEverySecondElement(array) {
  return array
    .filter((_,index) => index % 2 === 0) // here should we have an item (_ ) this represent the element
    .map((item) => (typeof item === 'number' ? item : typeof item === 'string' ? item : item));
}


  export function calculateDiscount(originalPrice, discountPercentage) {
    // Validate input
    if (isNaN(originalPrice) || originalPrice < 0) {
      throw new Error('Invalid original price');
    }
    if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error('Invalid discount percentage');
    }
  
    // Calculate the discounted price
    const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
    return discountedPrice;
  }

  export function gradeCalculator(studentScore) {
    const grades = {
      90: 'A',
      80: 'B',
      70: 'C',
      60: 'D',
      50: 'F',
    };
  
    if (isNaN(studentScore) || studentScore < 0) {
      throw new Error('Invalid student score');
    }
  
    if (studentScore >= 90) {
      return 'A';
    } else if (studentScore >= 80) {
      return 'B';
    } else if (studentScore >= 70) {
      return 'C';
    } else if (studentScore >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  export function calculateAverageGrade(studentScores) {

     if (studentScores.length === 0) {
       return ("No grads available ");
     }
   let totalScore = 0;
    for (const studentScore of studentScores) {
      if (isNaN(studentScore)) {
        throw new Error('Invalid student score');
      }
      totalScore += studentScore;
    }
  
    const averageScore = totalScore / studentScores.length;
    return averageScore;
  }