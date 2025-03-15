import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import ProtectRoute from '../../components/protectRoute'

export default function TabsLayout() {
	return (
		<ProtectRoute>
			<Tabs>
				<Tabs.Screen
					name='index'
					options={{
						headerShown: false,
						title: 'Home',
						tabBarIcon: ({ color }) => (
							<FontAwesome name='home' color={color} size={28} />
						),
					}}
				/>
				<Tabs.Screen
					name='profile'
					options={{
						headerShown: false,
						title: 'Profile',
						tabBarIcon: ({ color }) => (
							<FontAwesome name='user' color={color} size={28} />
						),
					}}
				/>
				<Tabs.Screen
					name='settings'
					options={{
						headerShown: false,
						title: 'Settings',
						tabBarIcon: ({ color }) => (
							<FontAwesome name='cog' color={color} size={28} />
						),
					}}
				/>
			</Tabs>
		</ProtectRoute>
	)
}
