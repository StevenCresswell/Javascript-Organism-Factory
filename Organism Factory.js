// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, dnaArr) =>{
    return {
      specimenNum: num,
      dna: dnaArr,
      mutate: function() {
        const newBase = returnRandBase()
        const letterIndex = Math.floor(Math.random() * 15)
        if (this.dna[letterIndex] !== newBase){
          this.dna[letterIndex] = newBase
        } else this.mutate()
      },
        compareDNA: function(comparedOrganism) {
          const differences = []
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === comparedOrganism.dna[i]) {
              differences.push(i);
            } 
          }
          console.log(differences)
          console.log(`Specimen ${this.specimenNum} and Specimen ${comparedOrganism.specimenNum} have ${(differences.length / comparedOrganism.dna.length) * 100}% DNA in common`)
        },
        willLikelySurvive: function() {
          const cAndGBases = []
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === 'C' || this.dna[i] === 'G') {
              cAndGBases.push(i);
            }
          } 
          if ((cAndGBases.length / this.dna.length) * 100 >= 60) {
            return true
          } 
          else return false
        },
        complementStrand: function() {
          const complementaryStrand = []
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === 'A') {
              complementaryStrand.push('T')
            }
            else if (this.dna[i] === 'T') {
              complementaryStrand.push('A')
            }
            else if (this.dna[i] === 'C') {
              complementaryStrand.push('G')
            }
            else if (this.dna[i] === 'G') {
              complementaryStrand.push('C')
            }
        }
        return complementaryStrand
      }
    }
  }
  const researchArray = []
  
  const createResearchArray = (numOfCreatures) => {
    for (i = 0; i < numOfCreatures; i++) {
      researchArray.push(pAequorFactory(i, mockUpStrand()))
    }
  }
  createResearchArray(30)
  console.log(researchArray)
  researchArray[15].compareDNA(researchArray[2])
  console.log(researchArray[29].complementStrand())