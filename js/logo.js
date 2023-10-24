const asciiContent = `
‎
                                              .dO00x.                    .:kOOOo.
                                              '0MMMK,                   ;kNMWKl.
                                              '0MMMK,                 'xNMWXo.
                                              '0MMMK,               .oXMMXd'
                                              '0MMMK,             .lKWMNk,
                ....                   ...    '0MMMK,           .:0WMWO;
               .o0KKk;               .dKKk'   '0MMMK,          ;OWMW0:.
                .lKMMXd.             .kMMX;   '0MMMK,        ,xNMW0l.
                  'xNMW0:            .kMMK;   '0MMMK,      .dXMMKo.
                   .c0WMNx'          .kMMX;   '0MMMK,    .lKWMXd.
                     .dNMMKc.        .kMMX;   '0MMMK,  .c0WMWk,
                       ;OWMWk,       .kMMX;   '0MMMK,.:OWMMMWk'
                        .oXMMXo.     'OMMX;   '0MMMXxkNMW0kKMMXl.
                          ,kWMWO;  .cOWMMX;   '0MMMMMMWKl. 'kNMWO;
                           .cKWMNxo0WMMMMX;   '0MMMMMXd.    .cKWMXd.
                             'xWMMMWOdKMMX;   '0MMMWk,        .dNMW0:
                             'kWMWO:..kMMX;   '0MMMK;           :0WMNx'
                           'dXMWO:.  .kMMX;   '0MMMK,            .oXMMKc.
                         'dXMWO:.    .kMMX;   '0MMMK,              ;OWMWk,
                       'dXMWO:.      .kMMX;   '0MMMK,               .lXMMXo.
                     'dXMWOc.        .kMMX;   '0MMMK,                 ,kWMWO;
                   'dXMWOc.          .kMMX;   '0MMMK,                  .cKMMNd.
                 'dXMW0c.            .kMMX;   '0MMMK,                    'xNMW0c.
                .:ooo:.              .kMMX;   .:lll:.                     .;lllc.
                                     .kMMX;
                                     .kMMX;
                                     .kMMK;
                                     .kMMK;
                                     .kMMK;
                                      ,cc;.
`;

const lines = asciiContent.trim().split('\n');
const displayArea = document.getElementById('loading-screen');
let currentLine = 0;

function displayNextLine() {
  if (currentLine < lines.length) {
      displayArea.innerHTML += lines[currentLine] + '\n';
      currentLine++;
      setTimeout(displayNextLine, 1);
  } else {
      setTimeout(() => {
          displayArea.style.opacity = '0';
          document.getElementById('phrase').style.opacity = '0';

          setTimeout(() => {
              displayArea.style.display = 'none';
              document.getElementById('phrase').style.display = 'none';
              const mainContent = document.getElementById('main-content');
              if (mainContent) {
                mainContent.style.display = 'block';
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                }, 1);
              }
          }, 1);
      }, 1);
  }
}
