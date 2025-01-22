import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [
    {
      id: 1,
      name: "Sushant Lok 2",
      price: 1.5,
      landmark: "Sector 57, Gurgaon",
      address: "Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
      isMostLiked: true,
      totalViews: 41172,
      rating: 5.0,
      bookingDate:"Apr 5 – 10"
    },
    {
      id: 2,
      name: "Gurgaon Heights",
      price: 3.2,
      landmark: "Sector 14, Gurgaon",
      address: "Jl. Boulevard, Sector 14, Gurgaon, Haryana 122001",
      isMostLiked: false,
      totalViews: 30000,
      rating: 4.2,
     bookingDate:"Mar 5 – 10"
    },
    {
      id: 3,
      name: "Uptown Residency",
      price: 2.1,
      landmark: "Sector 29, Noida",
      address: "Jl. Atta Market, Sector 29, Noida, Uttar Pradesh 201301",
      isMostLiked: true,
      totalViews: 50000,
      rating: 3.1,
     bookingDate:"Dec 5 – 10"
    },
    {
      id: 4,
      name: "Green Valley Apartments",
      price: 1.8,
      landmark: "Sector 21, Faridabad",
      address: "Jl. Sector 21, Faridabad, Haryana 121001",
      isMostLiked: false,
      totalViews: 25000,
      rating: 2.9,
     bookingDate:"Feb 5 – 10"
    },
    {
      id: 5,
      name: "Blue Ridge Residency",
      price: 2.5,
      landmark: "Vasant Vihar, New Delhi",
      address: "Jl. Vasant Vihar, New Delhi, Delhi 110057",
      isMostLiked: true,
      totalViews: 42000,
      rating: 2.1,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 6,
      name: "Sunrise Gardens",
      price: 1.2,
      landmark: "Saket, New Delhi",
      address: "Jl. Saket, New Delhi, Delhi 110017",
      isMostLiked: false,
      totalViews: 17000,
      rating: 3.4,
     bookingDate:"May 5 – 10"
    },
    {
      id: 7,
      name: "Elite Residency",
      price: 3.0,
      landmark: "DND, Noida",
      address: "Jl. DND Flyway, Noida, Uttar Pradesh 201301",
      isMostLiked: true,
      totalViews: 55000,
      rating: 4.7,
     bookingDate:"Jun 5 – 10"
    },
    {
      id: 8,
      name: "Riverfront Estates",
      price: 4.0,
      landmark: "MG Road, Bangalore",
      address: "Jl. MG Road, Bangalore, Karnataka 560001",
      isMostLiked: false,
      totalViews: 60000,
      rating: 4.3,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 9,
      name: "Hilltop Towers",
      price: 2.8,
      landmark: "Koramangala, Bangalore",
      address: "Jl. Koramangala, Bangalore, Karnataka 560095",
      isMostLiked: true,
      totalViews: 34000,
      rating: 4.2,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 10,
      name: "Crystal Waters",
      price: 1.7,
      landmark: "Marine Drive, Mumbai",
      address: "Jl. Marine Drive, Mumbai, Maharashtra 400020",
      isMostLiked: false,
      totalViews: 45000,
      rating: 4.0,
     bookingDate:"Apr 5 – 10"
    },
    // Adding more dummy data...
    {
      id: 11,
      name: "Palm Grove Villas",
      price: 2.2,
      landmark: "Juhu, Mumbai",
      address: "Jl. Juhu, Mumbai, Maharashtra 400049",
      isMostLiked: true,
      totalViews: 38000,
      rating: 4.6,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 12,
      name: "Skyline Residence",
      price: 3.1,
      landmark: "Kolkata",
      address: "Jl. Park Street, Kolkata, West Bengal 700016",
      isMostLiked: false,
      totalViews: 23000,
      rating: 3.9,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 13,
      name: "Oceanic Tower",
      price: 2.0,
      landmark: "Tidel Park, Chennai",
      address: "Jl. Tidel Park, Chennai, Tamil Nadu 600100",
      isMostLiked: true,
      totalViews: 40000,
      rating: 4.3,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 14,
      name: "The Palm Residency",
      price: 3.5,
      landmark: "Connaught Place, New Delhi",
      address: "Jl. Connaught Place, New Delhi, Delhi 110001",
      isMostLiked: false,
      totalViews: 32000,
      rating: 4.4,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 15,
      name: "West End Towers",
      price: 1.9,
      landmark: "Andheri West, Mumbai",
      address: "Jl. Andheri West, Mumbai, Maharashtra 400053",
      isMostLiked: true,
      totalViews: 27000,
      rating: 3.1,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 16,
      name: "Golden Gate Heights",
      price: 2.6,
      landmark: "Banjara Hills, Hyderabad",
      address: "Jl. Banjara Hills, Hyderabad, Telangana 500034",
      isMostLiked: false,
      totalViews: 21000,
      rating: 3.8,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 17,
      name: "Silver Oak Villas",
      price: 1.3,
      landmark: "Bangalore West",
      address: "Jl. Banashankari, Bangalore, Karnataka 560070",
      isMostLiked: true,
      totalViews: 31000,
      rating: 4.2,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 18,
      name: "Heritage Garden",
      price: 1.4,
      landmark: "MG Road, Pune",
      address: "Jl. MG Road, Pune, Maharashtra 411001",
      isMostLiked: false,
      totalViews: 16000,
      rating: 5,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 19,
      name: "City View Towers",
      price: 3.3,
      landmark: "Navi Mumbai",
      address: "Jl. Vashi, Navi Mumbai, Maharashtra 400703",
      isMostLiked: true,
      totalViews: 46000,
      rating: 4.5,
     bookingDate:"Apr 5 – 10"
    },
    {
      id: 20,
      name: "Sunset Avenue",
      price: 1.8,
      landmark: "Vile Parle, Mumbai",
      address: "Jl. Vile Parle, Mumbai, Maharashtra 400056",
      isMostLiked: true,
      totalViews: 50000,
      rating: 4.0,
     bookingDate:"Apr 5 – 10"
    },
    // Continuing with random data until 100 items...
    // Similar objects can be generated for the remaining entries.
  ],
  wishlistPropertyIds: [],
  wishlistPropertyDetails: [],
  loading: false,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    appendProperties: (state, action) => {
      state.properties = [...state.properties, ...action.payload];
    },
    toggleWishlist: (state, action) => {
      const propertyId = action.payload;
      if (state.wishlistPropertyIds.includes(propertyId)) {
        state.wishlistPropertyIds = state.wishlistPropertyIds.filter(id => id !== propertyId);
        state.wishlistPropertyDetails = state.wishlistPropertyDetails.filter(property => property.id !== propertyId);
      } else {
        state.wishlistPropertyIds.push(propertyId);
        const targetPropertyDetails = state.properties.find(property => property.id === propertyId);
        state.wishlistPropertyDetails.push(targetPropertyDetails);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProperties, appendProperties, toggleWishlist, setLoading } = propertySlice.actions;
export default propertySlice.reducer;