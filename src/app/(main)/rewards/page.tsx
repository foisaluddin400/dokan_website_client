"use client";

import React from 'react';
import { 
  Award, Trophy, Users, Star, Crown, 
  TrendingUp, UserCheck 
} from 'lucide-react';

const rewardsData = [
  {
    id: 1,
    name: "Rakibul Islam",
    avatar: "https://i.pravatar.cc/150?img=12",
    referrals: 87,
    points: 12450,
    type: "user",
    rank: 1,
    badge: "🏆 Legend",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    avatar: "https://i.pravatar.cc/150?img=45",
    referrals: 64,
    points: 9850,
    type: "seller",
    rank: 2,
    badge: "🥇 Elite",
  },
  {
    id: 3,
    name: "Samiul Hoque",
    avatar: "https://i.pravatar.cc/150?img=32",
    referrals: 59,
    points: 8720,
    type: "user",
    rank: 3,
    badge: "🥈 Champion",
  },
  {
    id: 4,
    name: "Nadia Rahman",
    avatar: "https://i.pravatar.cc/150?img=67",
    referrals: 52,
    points: 7650,
    type: "seller",
    rank: 4,
  },
  {
    id: 5,
    name: "Tahmid Hasan",
    avatar: "https://i.pravatar.cc/150?img=23",
    referrals: 48,
    points: 6890,
    type: "user",
    rank: 5,
  },
];

const topSellers = [
  {
    id: 101,
    name: "Tech World",
    logo: "https://i.pravatar.cc/100?img=1",
    owner: "Rakibul Islam",
    totalPoints: 12450,
    cover: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 102,
    name: "Fashion Hub",
    logo: "https://i.pravatar.cc/100?img=2",
    owner: "Ayesha Khan",
    totalPoints: 9850,
    cover: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    id: 103,
    name: "Gadget Zone",
    logo: "https://i.pravatar.cc/100?img=4",
    owner: "Samiul Hoque",
    totalPoints: 8720,
    cover: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

const RewardsPage = () => {
  return (
    <div className="min-h-screen  py-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm mb-4">
            <Crown className="text-yellow-500" size={28} />
            <h1 className="text-4xl font-bold text-gray-900">Rewards Hub</h1>
          </div>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Celebrate top referrers and sellers • Earn points by referring friends
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Leaderboard */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Trophy className="text-amber-500" /> 
                Top Referrers This Month
              </h2>
              <div className="text-sm text-gray-500">Updated today</div>
            </div>

            <div className="space-y-4">
              {rewardsData.map((user, index) => (
                <div
                  key={user.id}
                  className={`bg-white rounded-3xl p-6 flex items-center gap-6 border transition-all hover:shadow-lg
                    ${user.rank <= 3 ? 'border-amber-300 ' : 'border-border'}`}
                >
                  {/* Rank */}
                  <div className="w-12 text-center">
                    {user.rank <= 3 ? (
                      <div className="text-4xl">{user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}</div>
                    ) : (
                      <span className="text-2xl font-bold text-gray-400">#{user.rank}</span>
                    )}
                  </div>

                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow"
                    />
                    {user.rank <= 3 && (
                      <div className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                        👑
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg text-gray-900 truncate">{user.name}</h3>
                      <div className={`text-xs px-3 py-1 rounded-full font-medium
                        ${user.type === 'seller' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                        {user.type === 'seller' ? 'Seller' : 'User'}
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 mt-1 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Users size={16} /> {user.referrals} Referred
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={16} className="text-amber-500" /> {user.points.toLocaleString()} Points
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="text-right">
                    <div className="text-sm font-medium text-amber-600">{user.badge}</div>
                    <div className="text-xs text-gray-400 mt-1">Top Referrer</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Top 3 Seller Shops */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg p-6 border border-border ">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="text-emerald-500" size={24} />
                  <h3 className="text-xl font-semibold">Top Performing Sellers</h3>
                </div>

                <div className="space-y-5">
                  {topSellers.map((seller, index) => (
                    <div
                      key={seller.id}
                      className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <div className="relative h-40">
                        <img
                          src={seller.cover}
                          alt={seller.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={seller.logo}
                              alt={seller.name}
                              className="w-12 h-12 rounded-xl border-2 border-white shadow"
                            />
                            <div>
                              <p className="font-semibold text-white text-lg leading-tight">{seller.name}</p>
                              <p className="text-white/80 text-sm">{seller.owner}</p>
                            </div>
                          </div>
                        </div>

                        {/* Rank Badge */}
                        <div className="absolute top-4 right-4 bg-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                          <Crown size={14} className="text-amber-500" />
                          #{index + 1}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">Total Reward Points</p>
                            <p className="text-2xl font-bold text-emerald-600">
                              {seller.totalPoints.toLocaleString()}
                            </p>
                          </div>
                          <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-2xl text-sm font-medium hover:bg-emerald-700 transition">
                            Visit Shop
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-500">
                    Earn more points by referring friends and making sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;