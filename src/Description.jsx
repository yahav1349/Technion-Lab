import React from 'react';
import { Typography } from '@mui/material';
import Grow from '@mui/material/Grow';
import Histogram from './Histogram';
import jobs from './jobConst';
import mapping from './ClusterMap';

function Description({ selectedOption }) {
  let sections = null;

  if (selectedOption) {
    sections = mapping[selectedOption].description.split('>').filter(section => section.trim().length > 0);
  }

  return (
    <div className="description">
      {selectedOption && (
        <Grow
          in={selectedOption}
          style={{ transformOrigin: '0 0 0', color: '#0077B5' }}
          {...(selectedOption ? { timeout: 1000 } : {})}
        >
          <Typography variant='h1' style={{ fontSize: '70px', fontWeight: 'bold' , marginBottom:'20px'}}>
            𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧
          </Typography>
        </Grow>
      )}

      <div style={{ width: '550px' }}>
        {sections && sections.map((section, index) => (
          <Grow
            key={index}
            in={selectedOption}
            style={{ transformOrigin: '0 0 0', marginTop: index !== 0 ? '10px' : '0' }}
            {...(selectedOption ? { timeout: 6000 } : {})}
          >
            <div>
              <Typography variant='h4'
                  style={{ 
                    // textAlign: 'center',
                    marginTop: '10px',
                    fontSize: ((index + 1 === 1 || index + 1 === 3 || section.includes('Skills Required')) ? '30px' : '15px'), 
                    color: ((index + 1 === 1 || index + 1 === 3 || section.includes('Skills Required')) ?  '#663a8a': "black"),
                    fontWeight: ((index + 1 === 1 || index + 1 === 3 || section.includes('Skills Required')) ? 'bold' : 'normal'),
                    display: 'inline-block', 
                    marginRight: '10px' 
                  }}>
                    {(index + 1 === 1 || index + 1 === 3 || section.includes('Skills Required')) ? section.substring(3, section.length - 5) :
                      section.substring(3, section.length)}
              </Typography>
            </div>
          </Grow>
        ))}
      </div>
    </div>
  );
}

export default Description;



// import React from 'react';
// import { Typography } from '@mui/material';
// import Grow from '@mui/material/Grow';
// import jobs from './jobConst';
// import mapping from './ClusterMap';

// function Description({ selectedOption }) {
//   let sections = null;

//   if (selectedOption) {
//     sections = mapping[selectedOption]?.description.split('>').filter(section => section.trim().length > 0);
//   }

//   return (
//     <div className="description">
//       {selectedOption && (
//         <Grow
//           in={selectedOption}
//           style={{ transformOrigin: '0 0 0' }}
//           {...(selectedOption ? { timeout: 1000 } : {})}
//         >
//           <Typography variant='h1' style={{ fontSize: '70px', fontWeight: 'bold', color: '#0077B5' }}>
//             𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧
//           </Typography>
//         </Grow>
//       )}

//       <div style={{ width: '550px' }}>
//         {sections && sections.map((section, index) => {
//           console.log("Section before split:", section); // Log section before splitting
//           const separatorIndex = section.indexOf(':');
//           if (separatorIndex !== -1) {
//             const sectionTitle = section.slice(0, separatorIndex).trim();
//             const sectionContent = section.slice(separatorIndex + 1).trim();
//             console.log("Title:", sectionTitle); // Log section title
//             console.log("Content:", sectionContent); // Log section content

//             return (
//               <Grow
//                 key={index}
//                 in={selectedOption}
//                 style={{ transformOrigin: '0 0 0', marginTop: index !== 0 ? '10px' : '0' }}
//                 {...(selectedOption ? { timeout: 6000 } : {})}
//               >
//                 <div>
//                   <Typography variant='h4' style={{ fontSize: '15px', fontWeight: 'bold', color: '#0077B5' }}>
//                     {section}
//                   </Typography>
//                   <Typography variant='body1' style={{ fontSize: '15px', color: '#663a8a' }}>
//                     {sectionContent}
//                   </Typography>
//                 </div>
//               </Grow>
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default Description;

