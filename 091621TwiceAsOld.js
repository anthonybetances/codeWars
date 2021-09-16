/* Twice As Old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld > (2*sonYearsOld)){
    return dadYearsOld - (2*sonYearsOld)
    }else{
    return (2*sonYearsOld) - dadYearsOld
  }
}
