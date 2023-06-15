import type { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { Layout } from '../components/layouts/Layout'
import { EntryList } from '../components/ui/EntryList';
import { NewEntry } from '../components/ui/NewEntry';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - PainJira' >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />
              {/* Agegar una nueva entrada */}
              {/* Listado de entrada */}
              <NewEntry />
              <EntryList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
              {/* Agegar una nueva entrada */}
              {/* Listado de entrada */}
              <EntryList status="in-progress" />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
              {/* Agegar una nueva entrada */}
              {/* Listado de entrada */}
              <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
