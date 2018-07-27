import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Receipt from '@material-ui/icons/Receipt';
import QRScan from '@material-ui/icons/CropFree';
import History from '@material-ui/icons/Schedule';
import Payment from '@material-ui/icons/CreditCard';
import Settings from '@material-ui/icons/SettingsApplications';
import Contact from '@material-ui/icons/AccountCircle';
import Help from '@material-ui/icons/HelpOutline';
import Logout from '@material-ui/icons/ExitToApp';

export const TopItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Receipt />
      </ListItemIcon>
      <ListItemText primary="Current" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <QRScan />
      </ListItemIcon>
      <ListItemText primary="QR Scan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <History />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Payment />
      </ListItemIcon>
      <ListItemText primary="Payment" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const BottomItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Contact />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Help />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);