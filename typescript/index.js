"use strict";
// let a: number= 34;
// console.log(a);
Object.defineProperty(exports, "__esModule", { value: true });
let municipality1 = { municipalityId: 1, name: "Tenali", code: "TNL" };
let municipality2 = { municipalityId: 2, name: "Nellore", code: "NLR" };
let municipality3 = { municipalityId: 3, name: "Hyderabad", code: "HYD" };
let municipality4 = { municipalityId: 4, name: "Chennai", code: "CHN" };
let district1 = { districtId: 1, name: "Guntur", code: "GNT", municipalities: [municipality1] };
let district2 = { districtId: 2, name: "Nellore", code: "NLR", municipalities: [municipality2] };
let district3 = { districtId: 3, name: "Hyderabad", code: "HYD", municipalities: [municipality3] };
let district4 = { districtId: 4, name: "Ranga Reddy", code: "RR", municipalities: [municipality4] };
let state1 = { stateId: 1, name: "Andhra Pradesh", code: "AP", districts: [district1, district2] };
let state2 = { stateId: 2, name: "Telangana", code: "TS", districts: [district3, district4] };
// let state3:state={stateId:3,name:"Karnataka",code:"KA"}
// let state4:state={stateId:4,name:"Tamil Nadu",code:"TN"}
// console.log(state1);
let states = [state1, state2];
let district5 = { districtId: 5, name: "Krishna", code: "KRN", municipalities: [] };
let newstates = states.map(state => {
    if (state.stateId === 2) {
        state.districts.push(district5);
    }
    return state;
});
console.log(newstates);
// states.forEach(state =>{
//     state.districts.forEach(district =>{
//         district.municipalities.forEach(municipality =>{
//             console.log(state.name+" "+district.name+" "+municipality.name);
//         })
//     })
// }) 
// let states:state[]=[state1,state2]
// let districts:District[]=[district1,district2,district3,district4]
// let municipalities:Municipality[]=[municipality1,municipality2,municipality3,municipality4]
// municipalities.forEach(municipality =>{
//     let district:District | undefined = districts.find(district => district.districtId === municipality.municipalityId)
//     let state:state | undefined = states.find(state => state.stateId === district?.stateId)
//     console.log(municipality.name + " " + municipality.code + " " + district?.name+" "+state?.name);
// })
//# sourceMappingURL=index.js.map