   this.eleitoresTotal = 1000,
   this.votosNulos = 50,
   this.votosBrancos = 150,
   this.votosValidos = 800,

   
   percentualNulos = () => {
       return console.log("Nulos = " + this.votosNulos / this.eleitoresTotal);
    }
    
    percentualBrancos = () => {
        return console.log("Brancos = " + this.votosBrancos / this.eleitoresTotal);
    }
    
    percentualValidos = () => {
        return console.log("Validos = " + this.votosValidos / this.eleitoresTotal);
    }
    
    percentualNulos();
    percentualBrancos();
    percentualValidos();
