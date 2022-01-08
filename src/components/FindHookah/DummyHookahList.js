// IMPORTANT: plusCode must be properly encoded (specifically, + characters must be encoded to %2B)
// Use the following code/URL to retrieve position (latLng) info based on plusCode:
// item.address.position = fetch(`https://plus.codes/api?address=${item.address.plusCode}&key=${GC_API_KEY}`)
// .then(res => res.json())
// .then(
//   (result) => new window.google.maps.Marker({
//     position: result.plus_code.geometry.location,
//     map: map
//   })
//   (error) => console.error(error)
// )

export const dummyLists = [
  {
    id: 1,
    name: "KING OF THE PACK - Melbourne Central",
    rating: "3.4",
    phone: "+61396639523",
    website: "http://www.kingofthepackmelbournecentral.com.au/",
    address: {
      text: "150 Swanston St, Melbourne VIC 3000",
      position: {
        "lat": -37.8104375,
        "lng": 144.96218749999997
      }
    },
    imgUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNjGSBKuuZ_TdeQ5i93sI4602zPm6zbt496uGPj=w408-h306-k-no",
  },
  {
    id: 2,
    name: "Tobacco & Shisha Market",
    rating: "4.2",
    phone: "+61411231300",
    website: "https://www.facebook.com/Tobacco-shisha-market-101236441619472/",
    address: {
      text: "Footscray Station, Footscray VIC 3011",
      position: {
        "lat": -37.800812500000006,
        "lng": 144.90243749999996
      },
    },
    imgUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMgwb8t839CB2LRvmw30Hzi2LHsbcQtXi1FVPg0=w425-h240-k-no",
  },
  {
    id: 3,
    name: "Smokemart & GiftBox & Vape Square Elizabeth Street",
    rating: "4.4",
    phone: "+61383883374",
    website: "https://smokemart.com.au/",
    address: {
      text: "25 Elizabeth St, Melbourne VIC 3000",
      position: {
        "lat": -37.8175625,
        "lng": 144.9645625
      },
    },
    imgUrl:
      "https://lh5.googleusercontent.com/p/AF1QipPyLS6qSXBYUWsbWrkzrqSyifNoKPwqzWsTyedk=w408-h544-k-no",
  }
]