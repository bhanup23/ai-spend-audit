#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    
    while (t--) {
        int n;
        cin >> n;
        
        vector<long long> a(n), b(n);
        for (int i = 0; i < n; i++) cin >> a[i];
        for (int i = 0; i < n; i++) cin >> b[i];
        
        long long total = 0;
        long long best_min = 0;
        
        for (int i = 0; i < n; i++) {
            total += max(a[i], b[i]);
            best_min = max(best_min, min(a[i], b[i]));
        }
        
        cout << total + best_min << "\n";
    }
    
    return 0;
}