// get index of each x in instruction
function getIndexOfEachx(instructionStr){
  // store index value of each x in an array
  const indexValueOfx = [];
  for(let i = 0; i < instructionStr.length; i ++){
    if(instructionStr[i] == 'x' ){
      indexValueOfx.push(i);
    }
  }
  // return the array which stored index value of each x
  return indexValueOfx;
};


function comparePhotos(indexValueOfx, instructionStr){
  // store index of single photos
  let singlePhotos = [];
  // store index of repetitive photos
  let repetitivePhotos = [];
  // invoke function
  comparePhotosx(indexValueOfx, instructionStr);

  function comparePhotosx(indexValueOfx, instructionStr){
      // quit condition
      if(indexValueOfx.length < 2){
        console.log(indexValueOfx);
        if(!repetitivePhotos.includes(indexValueOfx[0])){
          singlePhotos.push(indexValueOfx[0]);
        }
        console.log('singlePhotos: ', singlePhotos);
        console.log('repetitivePhotos: ', repetitivePhotos);
        return ;
      }
      // first round recursive
      for(let i = 0; i < indexValueOfx.length; i++){

        // extract all values between 'first x' and 'second x'
        let fragmentRoute = instructionStr.slice(indexValueOfx[0], indexValueOfx[i+1]);

        // count ^ v > <
        let northCounts = (String(fragmentRoute).match(/\^/g) || []).length;
        let southCounts = (String(fragmentRoute).match(/v/g) || []).length;
        let eastCounts = (String(fragmentRoute).match(/>/g) || []).length;
        let westCounts = (String(fragmentRoute).match(/</g) || []).length;

        //
        if(northCounts === southCounts && eastCounts === westCounts){
          // if true, this x is a repetitive photo,
          repetitivePhotos.push(indexValueOfx[i+1]);
        }

      }
      if(!repetitivePhotos.includes(indexValueOfx[0])){
        singlePhotos.push(indexValueOfx[0]);
      }
      let secondIndexValueOfx = indexValueOfx.slice(1);
      // recursive
      return comparePhotosx(secondIndexValueOfx, instructionStr);
  }
  return singlePhotos;
}



const modeOneCalculation = (req, res) => {
  // extract instruction from request body, make sure if it's a string or object
  console.log('req.body: ', req.body);
  // let { instruction } = req.body;
  // turn instruction into a string

  // mock a string 
  let instruction = '^x^^x>>xvvx<<x<<x';
  const indexValueOfx = getIndexOfEachx(instruction);
  const singleShots = comparePhotos(indexValueOfx, instruction);
  console.log('singleShots in api.js: ', singleShots);
  res.json({singlePhotos: singleShots});
}



module.exports = {
  getIndexOfEachx,
  comparePhotos,
  modeOneCalculation
}







//
