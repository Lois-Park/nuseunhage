import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function AnimatedCard({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card sx={{ borderRadius: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6">{text}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
